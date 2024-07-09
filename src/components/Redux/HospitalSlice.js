import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


let initialState={hospital:[],isLoading:false,error:null,delete:""}
export let getAllHospitals=createAsyncThunk('hospitalSlice/getAllHospitals',
    async()=>{
        let {data}=await axios.get('http://localhost:8000/api/v1/hospital',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("adminToken")}`
                }
            }
        )
        .catch((err)=>err)

        console.log(data.data)
        return data.data

    }
)
export let deleteHospital=createAsyncThunk('hospitalSlice/deleteHospital',
    async(id)=>{
        let data= await axios.delete(`http://localhost:8000/api/v1/hospital/${id}`,
            {headers:{
                'Authorization':`Bearer ${localStorage.getItem("adminToken")}`
            }}
        ).catch((err)=>{console.log(err);})
        console.log(data);
        
        return id
    }
)
export let HospitalSlice = createSlice({
    name:"hospitalSlice",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllHospitals.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(getAllHospitals.fulfilled,(state,action)=>{
            state.hospital=action.payload;
            state.isLoading=false
        })
        builder.addCase(deleteHospital.fulfilled,(state,action)=>{
            state.hospital = state.hospital.filter(hospital => hospital.id !== action.payload);
            // state.delete = action.payload.data;
        })
    }
})
export let hospitalReducer=HospitalSlice.reducer
