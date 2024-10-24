import eventdata from './json-data/user-events.json';

export const getByVisitID = visitId => eventdata.sessions.filter(d =>  d.visit_id == visitId  );

export const search = (visitId = null, profileId = null, email =  null, phone =  null) => {
    switch (true) {
        case !!visitId:
            {
                const visitIdFilter = getByVisitID(visitId);
                const filteredEmail = visitIdFilter.find(data => data.email != null)
                const filterByEmail = eventdata.sessions.filter(d => d.email == filteredEmail.email );
                return filterByEmail && filterByEmail.length > 0 ? filterByEmail : visitIdFilter; 
            }
          
       case !!profileId:
        {
            const profileFilter = eventdata.sessions.filter(d => d.profile_id == profileId );
            const filteredEmail = profileFilter.find(data => data.email != null)
            const filterByEmail = eventdata.sessions.filter(d => d.email == filteredEmail.email );
            return filterByEmail && filterByEmail.length > 0 ? filterByEmail : profileFilter; 
        }

        case !!email:
        {
          
            return filterByEmail = eventdata.sessions.filter(d => d.email == email );
        }

         case !!phone:
        {
          
            const filterByPhone = eventdata.filter(d => d.phone == phone );
            return filterByPhone; 
        }
          
        default:
            return [];
    }
}

export const groupByApplication  = visitId => {
    const events = getByVisitID(visitId)[0].events;
      const applications = events.reduce((result, val) => {
            const application = val.name.split(' ')[0];
                (result[application] = result[application] || []).push(val);

                return result;

            }, {});

            
    return  Object.keys(applications);
}


export const byByApplicationAndId  = (visit_id, application) => {
    return eventdata.filter(d => d.visit_id == visit_id && d.application == application );
}
