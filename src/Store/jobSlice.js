import {createSlice} from "@reduxjs/toolkit"
const jobSlice=createSlice({
    name:"jobs",
    initialState:
    {
        jobList:[
            { id: 1, title: "Frontend Developer", company: "Google", location: "California", alumniId: 1,Requirement:"Proficient in python, JavaScript" },
            { id: 2, title: "Product Manager", company: "Facebook", location: "New York", alumniId: 2,Requirement:"SQL, excel, Tableau" },
            {id:3,title:"Marketing Manager", company:"Market Guru", location:"Delhi", alumniId:3,Requirement:"Digital Marketing, SE0"}
          ],
    },
    reducers:{
        addJobs:(state,action)=>
        {
            state.jobList.push(action.payload);
        }
    }
})
export const {addJob}=jobSlice.actions;
export default jobSlice.reducer;