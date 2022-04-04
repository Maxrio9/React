import { createSlice } from '@reduxjs/toolkit';
import budgetsSlice from '../../../../Redux_Toolkit_Budget/features/budgets/budgetsSlice';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = ({
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            });
        }
    }
});

export const selectTopic = (state) => state.topics;
export default budgetsSlice.reducers;