import type { Project } from './Project.ts';

function formatDescription(desc: string) : string {
  return desc.substring(0, 60) + '...'
}

function ProjectCard(props : {project: Project, onEdit: (project: Project) => void}) {

  const {project, onEdit} = props;

  const handleEditClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>, project : Project) => {
    console.log(e);
    onEdit(project);
    // console.log(project.name);
  }

  return (
    <div className="card">
      <img src={project.imageUrl} alt={props.project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{props.project.name}</strong>
        </h5>
        <p>{formatDescription(props.project.description)}</p>
        <button className="bordered" onClick={(event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleEditClick(event, props.project)}>
          <span className="icon-edit"></span>
          EDIT
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;