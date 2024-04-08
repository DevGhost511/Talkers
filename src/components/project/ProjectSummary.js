import React from 'react';
import moment from 'moment';

const ProjectSummary=({project})=> {
  return (
    <div>
      <div className="card z-depth-0 indigo darken-2 darken-1 project-summary">
        <div className="card-content white-text text-darken-3">
          <span className="card-title">{project.baslik}</span>
          <p>Yazan: {project.isim} {project.soyisim}</p>
          <p className="gray-text">{moment(project.olusturmaTarihi.toDate().toString()).calendar()}</p>
        </div>
      </div>
    </div>
  );
}


export default ProjectSummary;