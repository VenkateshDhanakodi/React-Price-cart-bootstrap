import './App.css';
import Card from './components/Card';
 
function App() {
  let plans = [{
    plan : "FREE",
    price: 0,
    user: "Single User",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    publicProject: "Unlimited Public Projects",
    publicProjectEnabler: true,
    communityAccess:"Community Access",
    communityAccessEnabler: true,
    dedicatedPhoneSupport: "Dedicated Phone Support",
    dedicatedPhoneSupportEnabler: false,
    privateProject: "Unlimited Private Projects",
    privateProjectEnabler: false,
    subDomain: "Free Subdomain",
    subDomainEnabler: false,
    reports: "Monthly Status Reports",
    reportsEnabler: false
  },
  {
    plan : "PLUS",
    price: 9,
    user: "5 Users",
    userEnabler: true,
    storage: "5GB Storage",
    storageEnabler: true,
    publicProject: "Unlimited Public Projects",
    publicProjectEnabler: true,
    communityAccess:"Community Access",
    communityAccessEnabler: true,
    privateProject: "Unlimited Private Projects",
    privateProjectEnabler: true,
    dedicatedPhoneSupport: "Dedicated Phone Support",
    dedicatedPhoneSupportEnabler: true,
    subDomain: "Free Subdomain",
    subDomainEnabler: true,
    reports: "Monthly Status Reports",
    reportsEnabler: false
  },
  {
    plan : "PRO",
    price: 49,
    user: "Unlimited Users",
    userEnabler: true,
    storage: "150GB Storage",
    storageEnabler: true,
    publicProject: "Unlimited Public Projects",
    publicProjectEnabler: true,
    communityAccess:"Community Access",
    communityAccessEnabler: true,
    dedicatedPhoneSupport: "Dedicated Phone Support",
    dedicatedPhoneSupportEnabler: true,
    privateProject: "Unlimited Private Projects",
    privateProjectEnabler: true,
    subDomain: "Free Subdomains",
    subDomainEnabler: true,
    reports: "Monthly Status Reports",
    reportsEnabler: true
  }]
  return <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* Paasing data as Objects for three price categories */}
      <Card data={plans[0]}></Card>
      <Card data={plans[1]}></Card>
      <Card data={plans[2]}></Card>

    </div>
  </div>
</section>
  </>
}
export default App;
