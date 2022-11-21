import {FC, useState} from 'react';

export interface Props {
    name: string;
    age: number;
    email: string;
}

export const Person: FC<Props>  = ({name, email, age}) => {
    const [country, setCountry ] = useState<string | null >('')
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <input placeholder='Write down your country...' onChange={(e) => 
        setCountry(e.target.value)}/>
        {country}
      
    </div>
  );
}
