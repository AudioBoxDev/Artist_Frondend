"use client"
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function TransactionsHistory() {
  const router = useRouter();

  const Back=()=>{

      router.push('/dashboard/wallet')
  
  }
  const transactions = [
    { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 07:52', type: 'SWAP', action: 'View Details' },
    { id: '#71667167', status: 'COMPLETED', date: 'Dec 7, 2019 23:26', type: 'Withdrawal', action: 'View Details' },
    { id: '#95214362', status: 'CANCELED', date: 'Dec 7, 2019 23:26', type: 'Subscription', action: 'View Details' },
    { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', type: 'Subscription', action: 'View Details' },
    { id: '#51746385', status: 'CANCELED', date: 'Dec 4, 2019 21:42', type: 'NFT Purchase', action: 'View Details' },
    { id: '#67397143', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', type: 'SWAP', action: 'View Details' },
    { id: '#67397143', status: 'COMPLETED', date: 'Mar 20, 2019 23:14', type: 'Withdrawal', action: 'View Details' },
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'IN PROGRESS':
        return 'text-yellow-500';
      case 'COMPLETED':
        return 'text-green-500';
      case 'CANCELED':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className=" font-roboto text-[#ABABAB]  ">
      <button
						onClick={Back}
						className="text-gray-400 flex items-center gap-2 hover:text-gray-200 mb-4"
					>
						<ArrowLeft size={14}/> back
					</button>
      <h2 className="text-2xl border-b border-[#151515] pb-4 font-bold mb-4">Transactions History</h2>
      <div className="bg-[#0E0B0E] p-4 rounded-lg overflow-x-auto text-sm ">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b border-[#151515]">
              <th className="py-4 px-4">ID</th>
              <th className="py-4 px-4">STATUS</th>
              <th className="py-4 px-4">DATE</th>
              <th className="py-4 px-4">TXN TYPE</th>
              <th className="py-4 px-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className=" text-sm hover:bg-gray-900">
                <td className="py-4 px-4">{transaction.id}</td>
                <td className={`py-4 px-4 ${getStatusColor(transaction.status)}`}>{transaction.status}</td>
                <td className="py-4 px-4">{transaction.date}</td>
                <td className="py-4 px-4">{transaction.type}</td>
                <td className="py-4 px-4">
                  <a href="#" className="text-blue-500 hover:underline">
                    {transaction.action} →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
