import { TABS } from "../../constants/actionTypes";

import { useDispatch } from 'react-redux';

import { toggleTab } from "../../actions/tasks";
import './tabs.css';

const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        
        TABS.map(tab => (
            
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
            
        ))
        
    )
}

export default Tabs;