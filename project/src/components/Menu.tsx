import React from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const Menu: React.FC = () => {
  const menuCategories = {
    shawarmas: [
      {
        id: '1',
        name: 'Chicken Shawarma',
        description: 'Tender marinated chicken with fresh vegetables and garlic sauce',
        price: '₹120',
        image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        id: '2',
        name: 'Mutton Shawarma',
        description: 'Succulent mutton with traditional spices and tahini',
        price: '₹150',
        image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        id: '3',
        name: 'Mix Shawarma',
        description: 'Perfect blend of chicken and mutton with special sauce',
        price: '₹140',
        image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    juices: [
      {
        id: '4',
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed oranges with natural sweetness',
        price: '₹60',
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        id: '5',
        name: 'Mango Lassi',
        description: 'Creamy yogurt drink with fresh mango pulp',
        price: '₹80',
        image: 'https://images.pexels.com/photos/5946604/pexels-photo-5946604.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        id: '6',
        name: 'Mixed Fruit Juice',
        description: 'Refreshing blend of seasonal fruits',
        price: '₹70',
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    desserts: [
      {
        id: '7',
        name: 'Baklava',
        description: 'Traditional Middle Eastern pastry with honey and nuts',
        price: '₹90',
        image: 'https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        id: '8',
        name: 'Kunafa',
        description: 'Sweet cheese-filled pastry with crispy vermicelli',
        price: '₹100',
        image: 'https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    icecreams: [
      {
        id: '9',
        name: 'Kulfi',
        description: 'Traditional Indian ice cream with cardamom and pistachios',
        price: '₹50',
        image: 'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        id: '10',
        name: 'Vanilla Scoop',
        description: 'Premium vanilla ice cream with rich flavor',
        price: '₹40',
        image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ]
  };

  const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full font-bold">
          {item.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
        <p className="text-gray-300 text-sm">{item.description}</p>
      </div>
    </div>
  );

  const CategorySection: React.FC<{ title: string; items: MenuItem[] }> = ({ title, items }) => (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Menu</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our delicious range of authentic Middle Eastern cuisine and refreshing beverages
          </p>
        </div>

        <CategorySection title="Shawarmas" items={menuCategories.shawarmas} />
        <CategorySection title="Fresh Juices" items={menuCategories.juices} />
        <CategorySection title="Desserts" items={menuCategories.desserts} />
        <CategorySection title="Ice Creams" items={menuCategories.icecreams} />
      </div>
    </section>
  );
};

export default Menu;