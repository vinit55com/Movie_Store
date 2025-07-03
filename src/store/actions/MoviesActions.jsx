export {removemovies} from "../reducers/MovieSlice"
import axios from "../../utils/Axios";
import { loadmovie} from '../reducers/MovieSlice';


export const asyncloadmovie = (id)=> async (dispatch,getState)=>{
    try{
        const details = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const videos = await axios.get(`/movie/${id}/videos`);

        let theultimatedetails ={
            details: details.data,
            externalids: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.english_name),
            videos: videos.data.results.find((m)=> m.type === "Trailer"),
        }
        dispatch(loadmovie(theultimatedetails));
    }catch(error){
        console.log(error);
    }
}