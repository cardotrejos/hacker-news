import React, {useState} from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core";
import dayjs from "dayjs"

const ArticlesTableRow = ({article, removeArticle}) => {
    const classes = useStyles();
    const {_id, story_title, title, author, created_at} = article;
    const [hover, setHover] = useState(false);

    const handleRemove = id => {
        removeArticle(id);
    };

    const renderDate = date => {
        const today = dayjs();
        const formatDate = dayjs(date);
        const diff = today.diff(formatDate, 'day');

        if (diff === 0) {
            let hour = formatDate.hour();
            let minutes = formatDate.minute();
            let moment = hour >= 12 ? "pm" : "am";

            return `${hour}:${minutes < 10 ? `0${minutes}` : minutes} ${moment}`;

        } else if (diff === 1) {
            return "Yesteday"
        
        } else {
            return formatDate.format('DD/MM/YYYY');
        };

    };

    return (
        <TableRow
            className={`${classes.row} ${hover && classes.rowHover}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <TableCell align="left">
                <Typography className={classes.rowText}>
                    {story_title ? story_title : title}
                    <label className={classes.authorText}>- {author} -</label>
                </Typography>
            </TableCell>
            <TableCell align="left" className={classes.rowText}>
                {renderDate(created_at)}
            </TableCell>
            <TableCell align="left" className={classes.rowText}>
                {hover && <DeleteIcon onClick={() => handleRemove(_id)}/>}
            </TableCell>
        </TableRow>
    );
};

const useStyles = makeStyles(theme => ({
    row: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff"
    },
    rowHover: {
        backgroundColor: "#ccc"
    },
    rowText: {
        color: "#333",
        fontSize: 13,
    },
    authorText: {
        color: "#999",
        marginLeft: 10
    }
}));

export default ArticlesTableRow;