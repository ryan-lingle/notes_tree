import React, { useEffect, useState } from "react";
import Quill from "react-quill";
import { MUTATE_BRANCH } from "../actions";
import client from "../index.js";
const Editor = (props) => {
  const [edit, setEdit] = useState(false);
  const [pendingChanges, setPendingChanges] = useState(false);

  const title = React.createRef();
  const image = React.createRef();


  const toolbar = {
    container: "#toolbar",
    handlers: { saveContent }
  }

  async function handleTitleEdit(event) {
    event.preventDefault();
    const { data } = await client.mutate({
      mutation: MUTATE_BRANCH,
      variables: {
        ...props,
        name: title.current.value,
        image: image.current.files[0]
      }
    });
    window.location.href = "/" + data.branch.slug;
  }

  function saveContent() {
    const { ops } = this.quill.getContents();
    try {
      client.mutate({
        mutation: MUTATE_BRANCH,
        variables: { ...props, body: JSON.stringify(ops) }
      });
    } catch(err) {
      console.log(err);
    }
  }

  console.log(props);

  return(
    <div id="editor">
      {edit ?
        <form onSubmit={handleTitleEdit} >
          <input id="title-edit" ref={title} defaultValue={props.name} />
          <input id="image-input" type="file" ref={image} />
          <img src={props.image} onDoubleClick={() => document.getElementById("image-input").click()}id="title-image" />
        </form>
        : <div>
            <h1 onDoubleClick={() => setEdit(true)} >{props.name}</h1>
            <img onDoubleClick={() => setEdit(true)} src={props.image} id="title-image" />
          </div>}
      <div id="toolbar" style={{ display: edit ? '' : 'none'}}>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-blockquote"></button>
        <button className="ql-code-block"></button>
        <button className="ql-header" value="2"></button>
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-indent" value="-1"></button>
        <button className="ql-indent" value="+1"></button>
        <select className="ql-color">
        </select>
        <button className="ql-link"></button>
        <button className="ql-image"></button>
        <button id="save-button" className="ql-saveContent">
          <i className="fa fa-save" />
        </button>
      </div>
      <div onDoubleClick={() => setEdit(true)} >
        <Quill
          value={JSON.parse(props.body)}
          modules={{
            toolbar: edit ? toolbar : null
          }}
          readOnly={!edit}
        />
      </div>
    </div>
  );
};

export default Editor;
