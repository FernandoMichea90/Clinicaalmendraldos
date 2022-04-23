import React, { Component, useState } from 'react';
import { ContentState, convertFromHTML } from 'draft-js'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../../css/editor.css'
import { Button, Typography } from '@material-ui/core';
const TextoEditor = (props) => {
  const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };
  const contentState = convertFromRaw(content);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML(convertFromRaw(content))

      )))

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="demo-toolbar-custom"
        wrapperClassName="demo-wrapper"
      //  onEditorStateChange={props.onEditorStateChange}

      />
      <Typography align='right'>
        <Button variant='contained' color="primary"
          onClick={props.mostrarcode}
        >
          ver codigo
        </Button>
      </Typography>
      {props.code == true &&
        <textarea
          disabled
          value={draftToHtml(convertFromRaw(content.getCurrentContent()))}
        />
      }

    </div>
  );

}
export default TextoEditor
