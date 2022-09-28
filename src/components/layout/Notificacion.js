import { notification } from 'antd';

const Notificacion = (message, description, placement, icon, callback) => {
  let notif = {
    message,
    description,
    placement,
    icon,
    onClick: () => {
      callback();
    },
  };

  notification.open({ ...notif });
};

export default Notificacion;