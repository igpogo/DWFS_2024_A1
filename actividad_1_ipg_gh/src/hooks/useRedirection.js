import React from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const useRedirection = (path) => {
	const nav = useNavigate();
	useEffect(()=> {
		setTimeout(()=>{
				nav(path);
			},
				4999
		);

	}); 
};

export default useRedirection;