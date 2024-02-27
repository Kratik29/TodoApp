import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MdOutlineDeleteOutline,
  MdEditNote,
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
const Table = ({ todos, setTodos, isLoading, fetchData }) => {
  const [editText, setEditText] = useState({
    'body': ''
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id, value) => {
    try {
      console.log(id);
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/todo/${id}/`,
        value
      );

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckBox = (id, value) => {
    handleEdit(id, {
      'completed': !value,
    });
  };

  const handleChange = (e) => {
    setEditText((prev) => ({
      ...prev,
      'body': e.target.value,
    }));
  };

  const handleclick = () => {
    handleEdit(editText.id, editText)
    setEditText({
      'body':''
    })
  };

  return (
    <div className="py-2">
      <table className="w-11/12 max-w-4x1 ">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Checkbox
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              To Do
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Data created
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div>Is Loading</div>
          ) : (
            <>
              {todos.map((todoItem, index) => {
                return (
                  <tr key={todoItem.id} className="border-b border-black">
                    <td className="p-3 text-sm" title={todoItem.id}>
                      <span
                        onClick={() => {
                          handleCheckBox(todoItem.id, todoItem.completed);
                        }}
                        className="inline-block cursor-pointer"
                      >
                        {todoItem.completed ? (
                          <MdOutlineCheckBox />
                        ) : (
                          <MdOutlineCheckBoxOutlineBlank />
                        )}
                      </span>
                    </td>
                    <td className="p-3 text-sm ">{todoItem.body}</td>
                    <td className="p-3 text-sm text-center">
                      {todoItem.completed ? (
                        <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-sky-300">
                          Done
                        </span>
                      ) : (
                        <span className="p-1.5 text-xs font-medium tracking-wider rounded-md bg-red-300">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-sm ">
                      {new Date(todoItem.updated).toLocaleString()}
                    </td>
                    <td className="p-3 text-sm font-medium grid grid-flow-col items-center mt-5">
                      <span className="text-xl cursor-pointer">
                        <label htmlFor="my_modal_6" className="btn">
                          <MdEditNote onClick={() => setEditText(todoItem)} />
                        </label>
                      </span>
                      <span className="text-xl cursor-pointer">
                        <MdOutlineDeleteOutline
                          onClick={() => {
                            handleDelete(todoItem.id);
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Task</h3>
          <input
          value={editText.body}
            onChange={handleChange}
            
            type="text"
            className="input input-bordered w-full mt-8"
          />
          <div className="modal-action">
            <label
              onClick={handleclick}
              htmlFor="my_modal_6"
              className="btn btn-primary"
            >
              Edit
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
