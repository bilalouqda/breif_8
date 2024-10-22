import { useState } from 'react';
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
        </div>
        <div className="my-2 flex sm:flex-row flex-col">          
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input placeholder="Search"  />
          </div>
        </div>
        <UserTable data={userData} onDelete={handleDelete} onView={handleView} />
      </div>
      <UserModal user={selectedUser} onClose={closeModal} />
    </div>
  );
};

export default Home;