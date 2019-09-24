/**
 * Created by Максим on 07.08.2019.
 */

export const required = value =>{

	if (value)return undefined
	return 'Field is required'

}


export const maxLengthCreator=(maxLength)=>(value)=>{
	if (value.length>10)return `Max length is ${maxLength} symbols`
	return undefined;
}

export const minLengthCreator=(minLength)=>(value)=>{
	if (value.length<8)return `Min length is ${minLength} symbols`
	return undefined;
}
