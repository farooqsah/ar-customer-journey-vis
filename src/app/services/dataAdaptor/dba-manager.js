import eventdata from './json-data/user-events.json';

export const getByVisitID = visitId => eventdata.filter(d => d.ids.visit_id == visitId )

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
            const profileFilter = eventdata.filter(d => d.ids.profile_id == profileId );
            const filteredEmail = profileFilter.find(data => data.email != null)
            const filterByEmail = eventdata.filter(d => d.email == filteredEmail );
            return filterByEmail && filterByEmail.length > 0 ? filterByEmail : profileFilter; 
        }

        case !!email:
        {
          
            const filterByEmail = eventdata.filter(d => d.form.email == email );
            return filterByEmail && filterByEmail.length > 0 ? filterByEmail : profileFilter; 
        }

         case !!phone:
        {
          
            const filterByPhone = eventdata.filter(d => d.form.phone == phone );
            return filterByPhone; 
        }
          
        default:
            return [];
    }
}

export const groupByApplication  = visit_id => {
    return Object.groupBy( getByVisitID(visit_id), ({ application }) => application);
}

export const byByApplicationAndId  = (visit_id, application) => {
    return eventdata.filter(d => d.ids.visit_id == visit_id && d.application == application );
}
