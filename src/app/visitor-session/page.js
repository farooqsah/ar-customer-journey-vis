import VisitorSession from "../components/steps/VisitorSession";
import { groupByVisitId } from "../services/dataAdaptor/dba-manager.js";

const VisitSessions = () => {
  const email = "piranaf1ajo@bills.com";
  const sessions = groupByVisitId(email);
  return <VisitorSession sessions={sessions} />;
};

export default VisitSessions;
