/**
 * Created by Максим on 23.09.2019.
 */

import 	React from 'react';
import Preloader from "../components/common/preloader/Preloader";


export const withSuspense=(Component)=>{
	return (props) => {
		return <React.Suspense fallback={<Preloader/>}>
			<Component {...props}/>
		</React.Suspense>
	};
}