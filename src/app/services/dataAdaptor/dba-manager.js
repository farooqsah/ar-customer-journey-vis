import eventdata from './json-data/user-events.json';

export const getByVisitID = visitId => eventdata.filter(d =>  d.visit_id == visitId  );

export const search = (visitId = null, profileId = null, email =  null, phone =  null) => {
    switch (true) {
        case !!visitId:
            {
                const visitIdFilter = getByVisitID(visitId);
                const filteredEmail = visitIdFilter.find(data => data.email != null)
                const filterByEmail = eventdata.filter(d => d.email == filteredEmail );
                return filterByEmail && filterByEmail.length > 0 ? filterByEmail : visitIdFilter; 
            }
          
       case !!profileId:
        {
            const profileFilter = eventdata.filter(d => d.profile_id == profileId );
            const filteredEmail = profileFilter.find(data => data.email != null)
            const filterByEmail = eventdata.filter(d => d.email == filteredEmail );
            return filterByEmail && filterByEmail.length > 0 ? filterByEmail : profileFilter; 
        }

        case !!email:
        {
          
            const filterByEmail = eventdata.filter(d => d.email == email );
            return filterByEmail && filterByEmail.length > 0 ? filterByEmail : profileFilter; 
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
      const applications = getByVisitID(visitId).reduce((x, y) => {
                (x[y.application] = x[y.application] || []).push(y);

                return x;

            }, {});

               console.log('applications::', applications)  
    return  Object.keys(applications);
}

export const byByApplicationAndId  = (visit_id, application) => {
    return eventdata.filter(d => d.visit_id == visit_id && d.application == application );
}
