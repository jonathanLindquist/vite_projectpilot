import { MOCK_PROJECTS } from './MockProjects.ts';
import ProjectList from './ProjectList.tsx';
import type { Project } from './Project.ts';
import TestInput from './TestInput.tsx';

// function ProjectsPage() {
//   return (
//     <>
//       <h1>Projects</h1>
//       <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
//     </>
//   );
// }

export interface Props {
  prop1: string
}

const ProjectsPage = (props : { prop1? : string }) => {
  const prop1 : string = props.prop1 !== null && props.prop1 !== undefined ? props.prop1 : "error";

  const saveProject = (project: Project) => {
    console.log(`saving project ${project}`)
  }

  return (
    <>
      <h1>Projects</h1>
      {prop1 && <p>{prop1}</p>}
      <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
      {/*<TestInput />*/}
    </>
  );
}

export default ProjectsPage;