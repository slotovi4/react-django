import * as React from 'react';
import { withAlert, AlertManager } from 'react-alert';

interface IProps {
  errors: any;
  message: string;
  alert: AlertManager;
  clearMessage: () => void;
  clearErrors: () => void;
}

const Alerts = ({
  errors,
  message,
  alert,
  clearMessage,
  clearErrors
}: IProps) => {
  React.useEffect(() => {
    if (errors.msg) {
      if (errors.msg.name) alert.error(errors.msg.name);
      if (errors.msg.email) alert.error(errors.msg.email);
      if (errors.msg.message) alert.error(errors.msg.message);
    }

    if (message) alert.success(message);

    clearMessage();
    clearErrors();
  }, [errors.msg, message]);

  return <React.Fragment />;
};

export default withAlert()(Alerts);
