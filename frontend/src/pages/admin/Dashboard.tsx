import { useState, useEffect } from "react";
import { ordersStore, quotesStore, clientsStore, messagesStore, adminAuth, Order, Quote, Client, ContactMessage } from "@/backend/services/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Package, FileText, Users, Mail, LogOut, Eye, RefreshCw, Lock } from "lucide-react";

const AdminDashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(adminAuth.isLoggedIn());
    const [password, setPassword] = useState('');
    const [activeSection, setActiveSection] = useState<'overview' | 'orders' | 'quotes' | 'clients' | 'messages'>('overview');
    const [orders, setOrders] = useState<Order[]>([]);
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [messages, setMessages] = useState<ContactMessage[]>([]);

    const refresh = () => {
        setOrders(ordersStore.getAll());
        setQuotes(quotesStore.getAll());
        setClients(clientsStore.getAll());
        setMessages(messagesStore.getAll());
    };

    useEffect(() => {
        if (isLoggedIn) refresh();
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (adminAuth.login(password)) {
            setIsLoggedIn(true);
        } else {
            alert('Invalid password');
        }
    };

    const handleLogout = () => {
        adminAuth.logout();
        setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted/30">
                <div className="bg-white rounded-2xl shadow-lg border border-border p-8 max-w-sm w-full">
                    <div className="text-center mb-6">
                        <Lock className="w-12 h-12 text-primary mx-auto mb-3" />
                        <h1 className="font-serif text-2xl font-bold">Admin Panel</h1>
                        <p className="text-sm text-muted-foreground">Ilon'Ala Back Office</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" className="w-full bg-primary">Connexion</Button>
                    </form>
                </div>
            </div>
        );
    }

    const orderStats = ordersStore.getStats();
    const quoteStats = quotesStore.getStats();
    const unreadMessages = messagesStore.getUnreadCount();

    const sections = [
        { key: 'overview' as const, icon: <BarChart3 className="w-4 h-4" />, label: 'Tableau de Bord' },
        { key: 'orders' as const, icon: <Package className="w-4 h-4" />, label: `Commandes (${orders.length})` },
        { key: 'quotes' as const, icon: <FileText className="w-4 h-4" />, label: `Devis (${quotes.length})` },
        { key: 'clients' as const, icon: <Users className="w-4 h-4" />, label: `Clients (${clients.length})` },
        { key: 'messages' as const, icon: <Mail className="w-4 h-4" />, label: `Messages (${unreadMessages})` },
    ];

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Top Bar */}
            <div className="bg-botanical text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-lg">Ilon'Ala</span>
                    <span className="text-white/60 text-sm">Admin</span>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" onClick={refresh} className="text-white/70 hover:text-white hover:bg-white/10">
                        <RefreshCw className="w-4 h-4 mr-1" /> Refresh
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white/70 hover:text-white hover:bg-white/10">
                        <LogOut className="w-4 h-4 mr-1" /> Logout
                    </Button>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-white border-r border-border min-h-[calc(100vh-52px)] p-4 hidden md:block">
                    <nav className="space-y-1">
                        {sections.map(s => (
                            <button
                                key={s.key}
                                onClick={() => setActiveSection(s.key)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === s.key ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/50'
                                    }`}
                            >
                                {s.icon} {s.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Mobile nav */}
                <div className="md:hidden w-full p-4 bg-white border-b border-border overflow-x-auto">
                    <div className="flex gap-2">
                        {sections.map(s => (
                            <button
                                key={s.key}
                                onClick={() => setActiveSection(s.key)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap ${activeSection === s.key ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                                    }`}
                            >
                                {s.icon} {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                    {/* OVERVIEW */}
                    {activeSection === 'overview' && (
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl font-bold">Tableau de Bord</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                    <Package className="w-8 h-8 text-primary mb-3" />
                                    <p className="text-3xl font-bold">{orderStats.total}</p>
                                    <p className="text-sm text-muted-foreground">Commandes</p>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                    <FileText className="w-8 h-8 text-gold mb-3" />
                                    <p className="text-3xl font-bold">{quoteStats.total}</p>
                                    <p className="text-sm text-muted-foreground">Devis</p>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                    <Users className="w-8 h-8 text-blue-500 mb-3" />
                                    <p className="text-3xl font-bold">{clients.length}</p>
                                    <p className="text-sm text-muted-foreground">Clients</p>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                    <Mail className="w-8 h-8 text-red-500 mb-3" />
                                    <p className="text-3xl font-bold">{unreadMessages}</p>
                                    <p className="text-sm text-muted-foreground">Messages non lus</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                    <h3 className="font-bold mb-3">Commandes récentes</h3>
                                    {orders.length === 0 ? (
                                        <p className="text-muted-foreground text-sm">Aucune commande</p>
                                    ) : (
                                        <div className="space-y-2">
                                            {orders.slice(-5).reverse().map(o => (
                                                <div key={o.id} className="flex justify-between items-center text-sm py-2 border-b border-border/50 last:border-0">
                                                    <div>
                                                        <span className="font-mono font-bold text-primary">{o.orderNumber}</span>
                                                        <span className="text-muted-foreground ml-2">{o.customerName}</span>
                                                    </div>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${o.orderStatus === 'new' ? 'bg-blue-100 text-blue-700' :
                                                        o.orderStatus === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                            o.orderStatus === 'shipped' ? 'bg-purple-100 text-purple-700' :
                                                                'bg-muted text-muted-foreground'
                                                        }`}>
                                                        {o.orderStatus}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                    <h3 className="font-bold mb-3">Devis récents</h3>
                                    {quotes.length === 0 ? (
                                        <p className="text-muted-foreground text-sm">Aucun devis</p>
                                    ) : (
                                        <div className="space-y-2">
                                            {quotes.slice(-5).reverse().map(q => (
                                                <div key={q.id} className="flex justify-between items-center text-sm py-2 border-b border-border/50 last:border-0">
                                                    <div>
                                                        <span className="font-mono font-bold text-gold">{q.quoteNumber}</span>
                                                        <span className="text-muted-foreground ml-2">{q.customerName}</span>
                                                    </div>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${q.status === 'new' ? 'bg-blue-100 text-blue-700' :
                                                        q.status === 'quoted' ? 'bg-amber-100 text-amber-700' :
                                                            q.status === 'accepted' ? 'bg-green-100 text-green-700' :
                                                                'bg-muted text-muted-foreground'
                                                        }`}>
                                                        {q.status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ORDERS */}
                    {activeSection === 'orders' && (
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl font-bold">Gestion des Commandes</h2>
                            {orders.length === 0 ? (
                                <div className="bg-white rounded-xl p-12 text-center border border-border">
                                    <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Aucune commande pour le moment</p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl border border-border overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead className="bg-muted/50">
                                                <tr>
                                                    <th className="text-left px-4 py-3 font-medium">N° Commande</th>
                                                    <th className="text-left px-4 py-3 font-medium">Client</th>
                                                    <th className="text-left px-4 py-3 font-medium">Montant</th>
                                                    <th className="text-left px-4 py-3 font-medium">Paiement</th>
                                                    <th className="text-left px-4 py-3 font-medium">Statut</th>
                                                    <th className="text-left px-4 py-3 font-medium">Date</th>
                                                    <th className="text-left px-4 py-3 font-medium">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map(o => (
                                                    <tr key={o.id} className="border-t border-border/50 hover:bg-muted/20">
                                                        <td className="px-4 py-3 font-mono font-bold text-primary">{o.orderNumber}</td>
                                                        <td className="px-4 py-3">
                                                            <p className="font-medium">{o.customerName}</p>
                                                            <p className="text-xs text-muted-foreground">{o.customerEmail}</p>
                                                        </td>
                                                        <td className="px-4 py-3 font-bold">{o.subtotal.toFixed(2)} {o.currency}</td>
                                                        <td className="px-4 py-3">
                                                            <span className="text-xs">{o.paymentMethod}</span>
                                                            <br />
                                                            <span className={`text-xs font-bold ${o.paymentStatus === 'confirmed' ? 'text-green-600' : 'text-amber-600'}`}>
                                                                {o.paymentStatus}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <Select
                                                                value={o.orderStatus}
                                                                onValueChange={(v) => {
                                                                    ordersStore.update(o.id, { orderStatus: v as Order['orderStatus'] });
                                                                    refresh();
                                                                }}
                                                            >
                                                                <SelectTrigger className="h-8 text-xs w-32">
                                                                    <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="new">Nouveau</SelectItem>
                                                                    <SelectItem value="confirmed">Confirmé</SelectItem>
                                                                    <SelectItem value="processing">En cours</SelectItem>
                                                                    <SelectItem value="shipped">Expédié</SelectItem>
                                                                    <SelectItem value="delivered">Livré</SelectItem>
                                                                    <SelectItem value="cancelled">Annulé</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </td>
                                                        <td className="px-4 py-3 text-xs text-muted-foreground">
                                                            {new Date(o.createdAt).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <Button variant="ghost" size="sm" onClick={() => {
                                                                ordersStore.update(o.id, { paymentStatus: 'confirmed' });
                                                                refresh();
                                                            }}>
                                                                <Eye className="w-4 h-4" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* QUOTES */}
                    {activeSection === 'quotes' && (
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl font-bold">Gestion des Devis</h2>
                            {quotes.length === 0 ? (
                                <div className="bg-white rounded-xl p-12 text-center border border-border">
                                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Aucun devis pour le moment</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {quotes.map(q => (
                                        <div key={q.id} className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <span className="font-mono font-bold text-gold">{q.quoteNumber}</span>
                                                    <h3 className="font-bold text-lg">{q.customerName}</h3>
                                                    <p className="text-sm text-muted-foreground">{q.customerEmail} • {q.country}</p>
                                                </div>
                                                <Select
                                                    value={q.status}
                                                    onValueChange={(v) => {
                                                        quotesStore.update(q.id, { status: v as Quote['status'] });
                                                        refresh();
                                                    }}
                                                >
                                                    <SelectTrigger className="w-32 h-8 text-xs">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="new">Nouveau</SelectItem>
                                                        <SelectItem value="quoted">Devisé</SelectItem>
                                                        <SelectItem value="accepted">Accepté</SelectItem>
                                                        <SelectItem value="rejected">Rejeté</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <p className="text-muted-foreground text-sm">{q.message}</p>
                                            <p className="text-xs text-muted-foreground mt-3">{new Date(q.createdAt).toLocaleString()}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* CLIENTS */}
                    {activeSection === 'clients' && (
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl font-bold">Gestion des Clients</h2>
                            {clients.length === 0 ? (
                                <div className="bg-white rounded-xl p-12 text-center border border-border">
                                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Aucun client enregistré</p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl border border-border overflow-hidden">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted/50">
                                            <tr>
                                                <th className="text-left px-4 py-3 font-medium">Nom</th>
                                                <th className="text-left px-4 py-3 font-medium">Email</th>
                                                <th className="text-left px-4 py-3 font-medium">Pays</th>
                                                <th className="text-left px-4 py-3 font-medium">Type</th>
                                                <th className="text-left px-4 py-3 font-medium">Commandes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {clients.map(c => (
                                                <tr key={c.id} className="border-t border-border/50">
                                                    <td className="px-4 py-3 font-medium">{c.name}</td>
                                                    <td className="px-4 py-3 text-muted-foreground">{c.email}</td>
                                                    <td className="px-4 py-3">{c.country}</td>
                                                    <td className="px-4 py-3"><span className="text-xs font-bold uppercase bg-primary/10 text-primary px-2 py-0.5 rounded">{c.type}</span></td>
                                                    <td className="px-4 py-3">{c.totalOrders}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* MESSAGES */}
                    {activeSection === 'messages' && (
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl font-bold">Messages de Contact</h2>
                            {messages.length === 0 ? (
                                <div className="bg-white rounded-xl p-12 text-center border border-border">
                                    <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Aucun message</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.map(m => (
                                        <div key={m.id} className={`bg-white rounded-xl p-6 border shadow-sm ${m.status === 'unread' ? 'border-primary/30 bg-primary/5' : 'border-border'}`}>
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="font-bold">{m.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{m.email}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    {m.status === 'unread' && (
                                                        <Button variant="outline" size="sm" onClick={() => { messagesStore.markRead(m.id); refresh(); }}>
                                                            Lu
                                                        </Button>
                                                    )}
                                                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => { messagesStore.delete(m.id); refresh(); }}>
                                                        ×
                                                    </Button>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{m.message}</p>
                                            <p className="text-xs text-muted-foreground mt-3">{new Date(m.createdAt).toLocaleString()}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
