export {removetv} from "../../store/reducers/TvSlices"
import axios from "../../utils/Axios";
import { loadtv} from '../../store/reducers/TvSlices';


export const asyncloadtv = (id)=> async (dispatch,getState)=>{
    try{
        const details = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);

        let theultimatedetails ={
            details: details.data,
            externalids: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.english_name),
            videos: videos.data.results.find((m)=> m.type === "Trailer"),
        }
        dispatch(loadtv(theultimatedetails));
    }catch(error){
        console.log(error);
    }
}