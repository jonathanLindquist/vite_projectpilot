import type { Project } from './Project.ts';
import ProjectCard from './ProjectCard.tsx';
import ProjectForm from './ProjectForm.tsx';
import { useState } from 'react';

function ProjectList(
  props: {
    projects: Array<Project>,
    onSave: (project: Project) => void
  }
) {
  // return <pre>{JSON.stringify(props.projects, null, ' ')}</pre>

  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    // console.log(project);
    setProjectBeingEdited(project);
  }

  const cancelEditing = () => {
    setProjectBeingEdited({});
  }

  return (
    <div className="row">
      {props.projects.map((project : Project) => (
        <div key={project.id} className="cols-sm">
         <ProjectCard project={project} onEdit={handleEdit}/>
          {projectBeingEdited === project && <ProjectForm onCancel={cancelEditing} onSave={props.onSave}/>}
          {projectBeingEdited !== project && <ProjectCard project={project} onEdit={handleEdit} />}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;