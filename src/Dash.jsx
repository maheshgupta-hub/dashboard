import React, { useState, useEffect } from 'react';
import { Menu, Bell, Search, User, Mail, Settings, ChevronDown, LayoutGrid, ShoppingBag, Users, FileText, Calendar, MessageSquare, Clock, DollarSign, ShoppingCart, TrendingUp, Package, Eye, EyeOff, LogOut } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SkoteApp = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    if (!isAuthenticated) {
        return <LoginPage onLogin={handleLogin} />;
    }

    return <DashboardLayout user={user} onLogout={handleLogout} />;
};

// Login Page Component
const LoginPage = ({ onLogin }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (Object.keys(newErrors).length === 0) {
            // Simulate successful login
            onLogin({ name: 'Henry Wells', email: formData.email, role: 'Admin' });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-900 to-slate-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-slate-900 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold text-white">Skote</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                    <p className="text-gray-400">Sign in to continue to Skote Dashboard</p>
                </div>

                {/* Login Card */}
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-slate-900">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all`}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className={`w-full px-4 py-3 bg-slate-700/50 border ${errors.password ? 'border-red-500' : 'border-slate-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-300 group-hover:text-white transition-colors">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
                        </div>

                        




                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Demo Info */}
                    <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <p className="text-xs text-blue-300 font-medium mb-2">Demo Account:</p>
                        <p className="text-xs text-gray-400">Email: admin@skote.com</p>
                        <p className="text-xs text-gray-400">Password: password123</p>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-center text-sm text-gray-400">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Sign up</a>
                    </p>
                </div>

                {/* Footer */}
                <p className="mt-8 text-center text-sm text-gray-500">
                    © 2024 Skote. Crafted with ❤️ by Themesbrand
                </p>
            </div>
        </div>
    );
};

// Dashboard Layout Component
const DashboardLayout = ({ user, onLogout }) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Sample data
    const revenueData = [
        { month: 'Jan', revenue: 12000, orders: 400 },
        { month: 'Feb', revenue: 19000, orders: 600 },
        { month: 'Mar', revenue: 15000, orders: 500 },
        { month: 'Apr', revenue: 25000, orders: 700 },
        { month: 'May', revenue: 22000, orders: 650 },
        { month: 'Jun', revenue: 30000, orders: 800 },
        { month: 'Jul', revenue: 28000, orders: 750 },
    ];

    const emailData = [
        { name: 'Mon', sent: 52 },
        { name: 'Tue', sent: 65 },
        { name: 'Wed', sent: 48 },
        { name: 'Thu', sent: 78 },
        { name: 'Fri', sent: 85 },
        { name: 'Sat', sent: 62 },
        { name: 'Sun', sent: 45 },
    ];

    const socialData = [
        { name: 'Facebook', value: 125, color: '#3b5998' },
        { name: 'Twitter', value: 112, color: '#1da1f2' },
        { name: 'Instagram', value: 104, color: '#e1306c' },
    ];

    const transactions = [
        { id: '#SK2540', customer: 'Neal Matthews', date: '07 Oct, 2019', total: 400, status: 'Paid', method: 'Mastercard', badge: 'success' },
        { id: '#SK2541', customer: 'Jamal Burnett', date: '07 Oct, 2019', total: 380, status: 'Chargeback', method: 'Visa', badge: 'danger' },
        { id: '#SK2542', customer: 'Juan Mitchell', date: '06 Oct, 2019', total: 384, status: 'Paid', method: 'Paypal', badge: 'success' },
        { id: '#SK2543', customer: 'Barry Dick', date: '05 Oct, 2019', total: 412, status: 'Paid', method: 'Mastercard', badge: 'success' },
        { id: '#SK2544', customer: 'Ronald Taylor', date: '04 Oct, 2019', total: 404, status: 'Refund', method: 'Visa', badge: 'warning' },
        { id: '#SK2545', customer: 'Jacob Hunter', date: '04 Oct, 2019', total: 392, status: 'Paid', method: 'Paypal', badge: 'success' },
    ];

    return (
        <div className="flex h-screen bg-slate-900 overflow-hidden">
            {/* Sidebar */}
            <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col`}>
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700">
                    {!sidebarCollapsed && (
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="text-xl font-bold text-white">Skote</span>
                        </div>
                    )}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-2 hover:bg-slate-700 rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                        <Menu size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 overflow-y-auto">
                    <div className="space-y-1">
                        <NavItem icon={<LayoutGrid size={20} />} text="Dashboard" active collapsed={sidebarCollapsed} />
                        <div className="pt-4">
                            <p className={`text-xs font-semibold text-gray-500 uppercase mb-2 ${sidebarCollapsed ? 'text-center' : 'px-3'}`}>
                                {sidebarCollapsed ? '—' : 'Apps'}
                            </p>
                            <NavItem icon={<Calendar size={20} />} text="Calendar" collapsed={sidebarCollapsed} />
                            <NavItem icon={<MessageSquare size={20} />} text="Chat" collapsed={sidebarCollapsed} />
                            <NavItem icon={<Mail size={20} />} text="Email" collapsed={sidebarCollapsed} badge="6" />
                            <NavItem icon={<ShoppingBag size={20} />} text="Ecommerce" collapsed={sidebarCollapsed} />
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
                    <div className="flex items-center space-x-4 flex-1 max-w-xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-slate-700 rounded-lg text-gray-400 hover:text-white relative transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center space-x-3 hover:bg-slate-700 p-2 rounded-lg transition-colors"
                            >
                                <img
                                    src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=4f46e5&color=fff`}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <div className="text-left hidden sm:block">
                                    <p className="text-sm font-medium text-white">{user?.name}</p>
                                    <p className="text-xs text-gray-400">{user?.role}</p>
                                </div>
                                <ChevronDown size={16} className="text-gray-400" />
                            </button>

                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
                                    <a href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-slate-700 rounded-t-lg">
                                        <User size={16} />
                                        <span>Profile</span>
                                    </a>
                                    <a href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:bg-slate-700">
                                        <Settings size={16} />
                                        <span>Settings</span>
                                    </a>
                                    <button
                                        onClick={onLogout}
                                        className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:bg-slate-700 rounded-b-lg"
                                    >
                                        <LogOut size={16} />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {/* Welcome */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-white mb-1">Welcome Back!</h1>
                        <p className="text-gray-400">Skote Dashboard</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <StatsCard title="Orders" value="1,235" change="+11.01%" icon={<ShoppingCart />} color="blue" trend="up" />
                        <StatsCard title="Revenue" value="$35,723" change="+29.42%" icon={<DollarSign />} color="green" trend="up" />
                        <StatsCard title="Average Price" value="$16.2" change="-0.42%" icon={<Package />} color="yellow" trend="down" />
                        <StatsCard title="Product Sold" value="1,432" change="+8.42%" icon={<TrendingUp />} color="purple" trend="up" />
                    </div>

                    {/* Monthly Earning Card */}
                    <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-white/80 text-sm mb-2">Monthly Earning</h3>
                                <h2 className="text-3xl font-bold text-white mb-2">$34,252</h2>
                                <p className="text-white/70 text-sm flex items-center">
                                    <TrendingUp size={16} className="mr-1" />
                                    12% increase from last month
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-white/80 text-xs mb-1">This month</p>
                                <div className="flex items-center justify-end space-x-2">
                                    <span className="text-2xl font-bold text-white">+12%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Revenue Chart */}
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white">Revenue</h3>
                                <select className="px-3 py-1 text-sm bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500">
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>Mar</option>
                                </select>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis dataKey="month" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                                        labelStyle={{ color: '#f1f5f9' }}
                                    />
                                    <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Email Sent Chart */}
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white">Email Sent</h3>
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded">Week</button>
                                    <button className="px-3 py-1 text-xs bg-slate-700 text-gray-300 rounded hover:bg-slate-600">Month</button>
                                </div>
                            </div>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={emailData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                                    <XAxis dataKey="name" stroke="#94a3b8" />
                                    <YAxis stroke="#94a3b8" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '0.5rem' }}
                                        labelStyle={{ color: '#f1f5f9' }}
                                    />
                                    <Bar dataKey="sent" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Social Source & Latest Transactions */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Social Source */}
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Social Source</h3>
                            <div className="flex justify-center mb-4">
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie
                                            data={socialData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {socialData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-3">
                                {socialData.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                            <span className="text-gray-300 text-sm">{item.name}</span>
                                        </div>
                                        <span className="text-white font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Latest Transactions */}
                        <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Latest Transactions</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-slate-700">
                                            <th className="text-left py-3 text-gray-400 font-medium text-sm">Order ID</th>
                                            <th className="text-left py-3 text-gray-400 font-medium text-sm">Customer</th>
                                            <th className="text-left py-3 text-gray-400 font-medium text-sm">Date</th>
                                            <th className="text-left py-3 text-gray-400 font-medium text-sm">Total</th>
                                            <th className="text-left py-3 text-gray-400 font-medium text-sm">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.slice(0, 5).map((tx, idx) => (
                                            <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                                                <td className="py-3 text-blue-400 text-sm">{tx.id}</td>
                                                <td className="py-3 text-white text-sm">{tx.customer}</td>
                                                <td className="py-3 text-gray-400 text-sm">{tx.date}</td>
                                                <td className="py-3 text-white text-sm font-medium">${tx.total}</td>
                                                <td className="py-3">
                                                    <span className={`px-2 py-1 rounded text-xs ${tx.badge === 'success' ? 'bg-green-500/20 text-green-400' :
                                                        tx.badge === 'danger' ? 'bg-red-500/20 text-red-400' :
                                                            'bg-yellow-500/20 text-yellow-400'
                                                        }`}>
                                                        {tx.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

// Components
const NavItem = ({ icon, text, active, collapsed, badge }) => (
    <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-lg cursor-pointer transition-all ${active ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-400 hover:bg-slate-700 hover:text-white'
        }`}>
        <div className="flex items-center space-x-3">
            {icon}
            {!collapsed && <span className="text-sm font-medium">{text}</span>}
        </div>
        {badge && !collapsed && (
            <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">{badge}</span>
        )}
    </div>
);

const StatsCard = ({ title, value, change, icon, color, trend }) => {
    const colors = {
        blue: 'from-blue-500 to-blue-600',
        green: 'from-green-500 to-green-600',
        yellow: 'from-yellow-500 to-yellow-600',
        purple: 'from-purple-500 to-purple-600',
    };

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${colors[color]} flex items-center justify-center text-white shadow-lg`}>
                    {icon}
                </div>
                <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {change}
                </span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    );
};

export default SkoteApp;