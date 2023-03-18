const CustomAlerts = (alert) => {
    return <div className={`alert w-100 ${alert.alertType}`} role="alert">
    {alert.alertMsg}
  </div>
}
export default CustomAlerts;