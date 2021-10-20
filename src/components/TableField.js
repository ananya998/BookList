import React from 'react'; 

const TableField = ({fieldName,settingsField,removeBook,editBook}) => {
    return(
        <div className="tablefield">
            {fieldName}
            {settingsField &&
            <>

             <i onClick={editBook} className="fas fa-edit"></i>
             <i onClick={removeBook} className="fas fa-dumpster"></i>
            </>
            }
        </div>

    );
};

export default TableField;