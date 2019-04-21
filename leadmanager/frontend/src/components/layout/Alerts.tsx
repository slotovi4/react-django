import * as React from 'react';
import { IMsg } from '../../actions/interface';
import { withAlert, AlertManager } from 'react-alert';

interface IProps {
  errors: IMsg;
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
    if (errors) {
      if (errors.name) alert.error(errors.name);
      if (errors.email) alert.error(errors.email);
      if (errors.message) alert.error(errors.message);
    }

    if (message) alert.success(message);

    clearMessage();
    clearErrors();
  }, [errors, message]);

  return <React.Fragment />;
};

export default withAlert()(Alerts);
