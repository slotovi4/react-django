import * as React from 'react';
import { withAlert, AlertManager } from 'react-alert';

interface IProps {
  errors: any;
  alert: AlertManager;
}

const Alerts = ({ errors, alert }: IProps) => {
  React.useEffect(() => {
    if (errors.msg.name) alert.error(errors.msg.name);
    if (errors.msg.email) alert.error(errors.msg.email);
    if (errors.msg.message) alert.error(errors.msg.message);
  }, [errors]);

  return <React.Fragment />;
};

export default withAlert()(Alerts);
