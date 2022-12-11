import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserPosts, editPostAction, fetchUserPosts, postDetail } from "../store/actions";
import React from "react";
import { Table, Button, Modal, Input } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;


function UserPostsPage() {
  const dispatch = useDispatch();

  const { postUser } = useSelector((state) => {
    return state;
  });

  const { detailPost } = useSelector((state) => {
    return state;
  });

  const [editingPost, setEditingPost] = useState()
  const [isEditing, setIsEditing] = useState(false);
  const [isViewDetail, setIsViewDetail] = useState(false);

  console.log(editingPost, 'editing post')

  function viewDetailPost(id) {
    dispatch(postDetail(id));

    setIsViewDetail(true);
  }

  function deletePost(id) {
    Modal.confirm({
      title: "Are you sure want to delete this user post?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        dispatch(deleteUserPosts(id));
        Modal.success({
          content: "Post succesfully deleted!",
        });
      },
    });
  }

  function editPost(id) {
    dispatch(postDetail(id))

    setEditingPost(detailPost)
    setIsEditing(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    let newPost = {
        ...editingPost,
    }

    newPost[name] = value

    setEditingPost(newPost)
  }

  function submitEdit() {
    dispatch(editPostAction(editingPost, detailPost.id))
    setIsEditing(false);
  }

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Post Caption",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Post Content",
      dataIndex: "body",
      key: "body",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (record) => {
        return (
          <>
            <div style={{ display: "flex" }}>
              <Button
                shape="round"
                icon={<FileTextOutlined />}
                style={{ marginRight: "5px" }}
                onClick={() => viewDetailPost(record.id)}
              >
                Detail
              </Button>
              <Button
                shape="round"
                icon={<EditOutlined />}
                style={{ marginRight: "5px" }}
                onClick={() => editPost(record.id)}
              >
                Edit
              </Button>
              <Button
                shape="round"
                danger="true"
                icon={<DeleteOutlined />}
                onClick={() => deletePost(record.id)}
              >
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [detailPost]);

  useEffect(() => {
    setEditingPost(detailPost)

  }, [detailPost])

  return (
    <>
      <div style={{ margin: "75px" }}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>
            <Button
              type="default"
              shape="round"
              icon={<PlusCircleOutlined />}
              style={{ marginBottom: "20px", marginRight: "20px" }}
            >
              Add new
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={postUser}
          pagination={{
            defaultPageSize: 5,
            size: "small",
            showSizeChanger: true,
            responsive: true,
            simple: true,
            position: ["bottomCenter"],
          }}
        />

        <Modal
          title="Edit Post"
          visible={isEditing}
          okText="Update"
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            submitEdit() 
          }}
        >
          <div style={{fontSize:'16px'}}>
            <label>User Id :</label>
            <Input value={editingPost?.userId} name='userId' onChange={handleChange} />
          </div>
          <div style={{fontSize:'16px', marginTop:'5px'}}>
            <label>Post Caption :</label>
            <TextArea rows={2} value={editingPost?.title}  name='title' onChange={handleChange}/>
          </div>
          <div style={{fontSize:'16px', marginTop:'5px'}}>
            <label>Post Content :</label>
            <TextArea rows={3} value={editingPost?.body} name='body' onChange={handleChange} />
          </div>

        </Modal>

        <Modal
          title="Post Detail"
          style={{ textAlign: "center" }}
          visible={isViewDetail}
          onCancel={() => {
            setIsViewDetail(false);
          }}
          footer={null}
        >
          <div>
            <h5>Post user ID : {detailPost?.userId}</h5>
          </div>
          <div>
            <h5>Post title : {detailPost?.title}</h5>
          </div>
          <div>
            <h5>Post content : {detailPost?.body}</h5>
          </div>
          <div>
            <h5>Post ID : {detailPost?.id}</h5>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default UserPostsPage;
