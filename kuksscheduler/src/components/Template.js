import './Template.scss';

const Template = ({children}) => {
    return (
      <div className="Template">
          <div className="app-title">Kuks Scheduler</div>
          <div className="content">{children}</div>
      </div>
    );
};

export default Template;