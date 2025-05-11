import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


const CodeEditor = () => {
    const [html, setHtml] = useState("<h1>Hello, world!</h1>");
    const [css, setCss] = useState("body { background: #12151f; color: white; }");
    const [js, setJs] = useState(`console.log('Welcome to 4DEV!');`);
    const [project, setProject] = useState({ title: '' });
  const iframeRef = useRef(null);

  // const {data:authUser} = useQuery({queryKey: ['authUser']})
	const queryClient = useQueryClient();

  const { mutate: createProject, isPending,isError,error} = useMutation({
		mutationFn: async ({title, html, css, js}) => {
			try {
				const res = await fetch("/api/projects/create", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({title, html, css, js})
				})
				const data = await res.json();
				if(!res.ok){
					throw new Error(data.error || "Something went wrong")
				}
				return data
			} catch (error) {
				throw new Error(error)
			}
		},
		onSuccess: ()=> {
			
			queryClient.invalidateQueries({queryKey: ['projects']})
			toast.success("Project saved successfully!");

		}
	})

  const [activeTab, setActiveTab] = useState('html');

  const updatePreview = () => {
    const fullCode = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
      </html>`;
    
    iframeRef.current.srcdoc = fullCode;
  };
  
  
  const copyCode = () => {
    let code = '';
    if (activeTab === 'html') code = html;
    if (activeTab === 'css') code = css;
    if (activeTab === 'js') code = js;
  
    navigator.clipboard.writeText(code).then(() =>
      alert('Code copied to clipboard!')
    );
  };
  

  return (
     <>
    <h5 className="text-white mb-4 mt-4 fw-semibold">Code Editor</h5>
    
    <div className="code-editor-container mt-3 mb-3">
     <div className="editor-header d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center p-3 gap-3">
  <h6 className="mb-0 text-white">
    <i className="bi bi-code help"></i> Code Editor
    <span className="badge bg-purple ms-2 text-uppercase">{activeTab}</span>
  </h6>

  <div className="d-flex flex-wrap gap-2 ">
    <div className="project-title-input input-group input-group-sm mb-1" style={{ maxWidth: "100%" }}>
      <span className="input-group-text bg-dark border-0 text-white">
        <i className="bi bi-terminal"></i>
      </span>
      <input
        type="text"
        className="form-control bg-dark text-white border-0"
        placeholder="Project Title"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />
    </div>

    <button
      className="btn btn-success btn-sm"
      disabled={!project.title || isPending}
      onClick={() => createProject({ title: project.title, html, css, js })}
    >
      {isPending ? "Saving..." : "Save Project"}
    </button>

    <button className="copy btn-sm btn-outline-light" onClick={copyCode}>
      <i className="bi bi-clipboard"></i> Copy
    </button>

    <button className="btn btn-purple btn-sm" onClick={updatePreview}>
      <i className="bi bi-play-fill"></i> Run
    </button>
  </div>
</div>


      <div className="d-flex bg-dark text-white">
        {['html', 'css', 'js'].map((tab) => (
          <button
            key={tab}
            className={`btn btn-sm ${activeTab === tab ? 'btn-purple' : 'btn-dark'} rounded-0 w-100`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div>
      {activeTab === 'html' && (
  <Editor
  height="300px"
  language="html"
  theme="vs-dark"
  value={html}
  onChange={(value) => setHtml(value || '')}
/>

)}
{activeTab === 'css' && (
  <Editor
    height="300px"
    language="css"
    theme="vs-dark"
    value={css}
    onChange={(value) => setCss(value || '')}
  />
)}
{activeTab === 'js' && (
  <Editor
    height="300px"
    language="javascript"
    theme="vs-dark"
    value={js}
    onChange={(value) => setJs(value || '')}
  />
)}

      </div>

      <div className="output-console text-white small px-3 py-2 border-top">
        <strong>Live Preview:</strong>
        <iframe
  ref={iframeRef}
  title="Live Preview"
  style={{ width: '100%', height: '300px', border: '1px solid #2a2d3a' }}
  sandbox="allow-scripts allow-same-origin"
/>


      </div>

      <div className="editor-footer text1 px-3 py-2 small border-top">
        Write HTML, CSS, and JS and see it live! Earn +50 XP for completing this challenge.
      </div>
    </div>
    </>
  );
};

export default CodeEditor;
