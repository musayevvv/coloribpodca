import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCategoryThunk,
    postCategoryThunk,
    deleteCategoryThunk,
    updateCategoryThunk
} from "../../redux/reducers/dashboardSlice";
import { Field, Form, Formik } from "formik";
import { TiDeleteOutline } from "react-icons/ti";
import { GoPencil } from "react-icons/go";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const [editItem, setEditItem] = useState(null);
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategoryThunk());
    }, [dispatch]);

    const handleSubmit = (values, { resetForm }) => {
        if (editItem) {
            const updatedData = {
                name: values.name,
                role: values.role,
                image: values.image,
                description: values.description,
            };
            dispatch(updateCategoryThunk({ _id: editItem._id, updatedData }));
            setEditItem(null);
        } else {
            dispatch(postCategoryThunk(values));
        }
        resetForm();
    };

    const handleDelete = (_id) => {
        dispatch(deleteCategoryThunk(_id));
    };

    const handleEdit = (item) => {
        setEditItem(item);
    };

    if (loading) return <span>Yüklənir...</span>;
    if (error) return <span>Xəta baş verdi: {error}</span>;

    return (
        <div className={styles.dashboard}>
            <Formik
                enableReinitialize
                initialValues={{
                    name: editItem?.name || "",
                    role: editItem?.role || "",
                    image: editItem?.image || "",
                    description: editItem?.description || "",
                }}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className={styles.formGroup}>
                        <Field type="text" name="name" placeholder="Name" />
                        <Field type="text" name="role" placeholder="Role" />
                        <Field type="text" name="image" placeholder="Image URL" />
                        <Field type="text" name="description" placeholder="Description" />
                        <button type="submit">{editItem ? "Update" : "Add"}</button>
                        {editItem && (
                            <button type="button" onClick={() => setEditItem(null)}>
                                Cancel
                            </button>
                        )}
                    </Form>
                )}
            </Formik>

            <div className={styles.productList}>
                {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((item) => (
                        <div className={styles.card} key={item._id}>
                            <div className={styles.body}>
                                <TiDeleteOutline onClick={() => handleDelete(item._id)} className={styles.bodyicon} />
                                <GoPencil onClick={() => handleEdit(item)} className={styles.pen} />
                                <img src={item.image} alt={item.name} className={styles.image} />
                                <span className={styles.title}>{item.name}</span>
                                <span className={styles.description}>Role: {item.role}</span>
                                <span className={styles.description}>Description: {item.description}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>No products found.</span>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
