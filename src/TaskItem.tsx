import React, {useState} from 'react';
import styles from "./TaskItem.module.css";
// import firebase from "firebase/app";
import {ListItem, TextField, Grid} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlineIcon from "@material-ui/icons/EditOutlined";
import {db} from "./firebase";


interface Props {
    id : string;
    title : string;
}



const TaskItem : React.FC<Props> = (props) => {
    const [title,setTitle] = useState(props.title)

    const editTask = () => {
        db.collection("tasks").doc(props.id).set({title: title},)
    }

    const deleteTask = () => {
        db.collection("tasks").doc(props.id).delete();
    }

    return (
            <ListItem>
                <h2>{props.title}</h2>
                <Grid container justify = "flex-end">
                    <TextField
                    InputLabelProps = {{
                        shrink: true,
                    }}

                    label = "Edit Task"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    />                   
                </Grid> 

                    {/* 編集削除ボタン */}
                <button className = {styles.taskitem__icon} onClick = {editTask}>
                    <EditOutlineIcon />
                </button>
                <button className = {styles.taskitem__icon} onClick = {deleteTask}>
                    <DeleteOutlineOutlinedIcon/>
                </button>

            </ListItem>
    );
}

export default TaskItem
