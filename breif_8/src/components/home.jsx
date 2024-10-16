import { useState } from 'react';
import { Table } from 'lucide-react';
import { users } from './Data';
import UserTable from './table';
import UserModal from './model';

const Home = () => {
  const [userData, setUserData] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (id) => {
    setUserData(userData.filter(user => user.id !== id));
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between w-full mb-1 sm:mb-0">
          <h2 className="text-2xl leading-tight">Users</h2>
          <div className="text-end">
            <Table className="inline-block" size={24} />
            <span className="ml-2 text-xl">Table</span>
          </div>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="flex flex-row mb-1 sm:mb-0">
            <div className="relative">
              <select className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          </div>
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input placeholder="Search" className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
          </div>
        </div>
        <UserTable data={userData} onDelete={handleDelete} onView={handleView} />
      </div>
      <UserModal user={selectedUser} onClose={closeModal} />
    </div>
  );
};

export default Home;