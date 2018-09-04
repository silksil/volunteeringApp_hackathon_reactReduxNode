import React from 'react';
import { Link } from 'react-router-dom';

export default function OverviewDisasterTab(props) {
  function renderContent(disasters){
    if (disasters.length === 0) {
      return <div className="loader"> loading</div>
    }

    return (
      <ul className='disasters'>
        {disasters.map(disaster => {
          const link = disaster.active ? 'active-disaster' : 'disasters';
          
          return (
            <li ckey={disaster.id}>
                <Link to={`/${link}/${disaster.id}`}>
                  <div className="image-card-container">
                    <img className="image-picture" src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/1534707268-Lombok-earthquake-960x540.jpg" alt="disaster-{disaster.name}"/>
                    <div className="image-info">
                        <div className={`image-disaster-level-card ${disaster.disasterLevel.toLowerCase()}`}>
                          <p className="image-disaster-level-text"> {disaster.disasterLevel}</p>
                        </div>
                        <h2 className="image-disaster-name">{disaster.name}</h2>
                        <p className="image-number-volunteers">{disaster.activeVolunteers} active volunteers</p>
                    </div>
                  </div>
                </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <div>
      {renderContent(props.disasters)}
    </div>
  )
}
