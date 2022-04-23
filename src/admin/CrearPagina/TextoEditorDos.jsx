import React, { useState,useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {SubirImagen} from '../../Firebase/FuncFirebase'

const TextoEditorDos =(props)=> {
    const [data, setdata] = useState()
 
    

      function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return uploadAdapter(loader);
        };
      }


      function uploadAdapter(loader) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then(async(file) => {
                console.log(file)
                const test= await SubirImagen(file)
                console.log(test)
                resolve({
                  default:test
                });
             
              });
            });
          }
        };
      }

    
        return (
            <div className="TextoEditorDos">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    config={{
                        extraPlugins: [uploadPlugin]
                      }}
                    data={props.html}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                       // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data)
                        props.setHtml(data)
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    
}

export default TextoEditorDos;
