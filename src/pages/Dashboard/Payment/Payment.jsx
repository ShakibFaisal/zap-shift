import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const {parcelId}=useParams()
     const axiosSecure = UseAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${parcelId}`);
            return res.data;
        }
    })
     if (isLoading) {
        return <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    return (
        <div>
            please pay {parcel.parcelName}
        </div>
    );
};

export default Payment;