
/**
 * Ilon'Ala Backend Store
 * ──────────────────────
 * localStorage-based backend simulation with proper data structures.
 * Ready to be replaced with a real API (Supabase, Node.js, etc.)
 */

// ═══════════════════════════════════════
// TYPES
// ═══════════════════════════════════════

export interface Order {
    id: string;
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    company?: string;
    country: string;
    items: OrderItem[];
    subtotal: number;
    currency: string;
    paymentMethod: 'mvola' | 'bank-transfer' | 'paypal';
    paymentStatus: 'pending' | 'confirmed' | 'failed';
    orderStatus: 'new' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    shippingMethod: 'local' | 'export';
    shippingAddress: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

export interface OrderItem {
    productId: string;
    name: string;
    quantity: number;
    price?: number;
    priceType: string;
    type: 'product' | 'nursery';
}

export interface Quote {
    id: string;
    quoteNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    company?: string;
    country: string;
    products: string[];
    estimatedQuantity: string;
    message: string;
    status: 'new' | 'quoted' | 'accepted' | 'rejected' | 'expired';
    quotedPrice?: number;
    quotedCurrency?: string;
    adminNotes?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    country: string;
    type: 'b2c' | 'b2b';
    totalOrders: number;
    totalSpent: number;
    createdAt: string;
    lastOrderAt?: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    interest: string;
    message: string;
    status: 'unread' | 'read' | 'replied';
    createdAt: string;
}

// ═══════════════════════════════════════
// STORE OPERATIONS
// ═══════════════════════════════════════

function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function generateOrderNumber(): string {
    const date = new Date();
    const y = date.getFullYear().toString().slice(-2);
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const n = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `ILA-${y}${m}-${n}`;
}

function generateQuoteNumber(): string {
    const date = new Date();
    const y = date.getFullYear().toString().slice(-2);
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const n = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `DEV-${y}${m}-${n}`;
}

// Generic localStorage CRUD
function getAll<T>(key: string): T[] {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveAll<T>(key: string, items: T[]) {
    localStorage.setItem(key, JSON.stringify(items));
}

function addOne<T extends { id: string }>(key: string, item: T): T {
    const items = getAll<T>(key);
    items.push(item);
    saveAll(key, items);
    return item;
}

function updateOne<T extends { id: string }>(key: string, id: string, updates: Partial<T>): T | null {
    const items = getAll<T>(key);
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...updates, updatedAt: new Date().toISOString() } as T;
    saveAll(key, items);
    return items[index];
}

function deleteOne(key: string, id: string): boolean {
    const items = getAll<{ id: string }>(key);
    const filtered = items.filter(i => i.id !== id);
    if (filtered.length === items.length) return false;
    saveAll(key, filtered);
    return true;
}

// ═══════════════════════════════════════
// ORDERS
// ═══════════════════════════════════════

const ORDERS_KEY = 'ilonala-orders';

export const ordersStore = {
    getAll: () => getAll<Order>(ORDERS_KEY),
    getById: (id: string) => getAll<Order>(ORDERS_KEY).find(o => o.id === id),
    create: (data: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>): Order => {
        const order: Order = {
            ...data,
            id: generateId(),
            orderNumber: generateOrderNumber(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        return addOne(ORDERS_KEY, order);
    },
    update: (id: string, updates: Partial<Order>) => updateOne<Order>(ORDERS_KEY, id, updates),
    delete: (id: string) => deleteOne(ORDERS_KEY, id),
    getByStatus: (status: Order['orderStatus']) =>
        getAll<Order>(ORDERS_KEY).filter(o => o.orderStatus === status),
    getStats: () => {
        const orders = getAll<Order>(ORDERS_KEY);
        return {
            total: orders.length,
            pending: orders.filter(o => o.orderStatus === 'new').length,
            processing: orders.filter(o => o.orderStatus === 'processing').length,
            shipped: orders.filter(o => o.orderStatus === 'shipped').length,
            delivered: orders.filter(o => o.orderStatus === 'delivered').length,
            revenue: orders
                .filter(o => o.paymentStatus === 'confirmed')
                .reduce((sum, o) => sum + o.subtotal, 0),
        };
    },
};

// ═══════════════════════════════════════
// QUOTES / DEVIS
// ═══════════════════════════════════════

const QUOTES_KEY = 'ilonala-quotes';

export const quotesStore = {
    getAll: () => getAll<Quote>(QUOTES_KEY),
    getById: (id: string) => getAll<Quote>(QUOTES_KEY).find(q => q.id === id),
    create: (data: Omit<Quote, 'id' | 'quoteNumber' | 'createdAt' | 'updatedAt'>): Quote => {
        const quote: Quote = {
            ...data,
            id: generateId(),
            quoteNumber: generateQuoteNumber(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        return addOne(QUOTES_KEY, quote);
    },
    update: (id: string, updates: Partial<Quote>) => updateOne<Quote>(QUOTES_KEY, id, updates),
    delete: (id: string) => deleteOne(QUOTES_KEY, id),
    getStats: () => {
        const quotes = getAll<Quote>(QUOTES_KEY);
        return {
            total: quotes.length,
            newQuotes: quotes.filter(q => q.status === 'new').length,
            quoted: quotes.filter(q => q.status === 'quoted').length,
            accepted: quotes.filter(q => q.status === 'accepted').length,
        };
    },
};

// ═══════════════════════════════════════
// CLIENTS
// ═══════════════════════════════════════

const CLIENTS_KEY = 'ilonala-clients';

export const clientsStore = {
    getAll: () => getAll<Client>(CLIENTS_KEY),
    getById: (id: string) => getAll<Client>(CLIENTS_KEY).find(c => c.id === id),
    create: (data: Omit<Client, 'id' | 'createdAt'>): Client => {
        const client: Client = {
            ...data,
            id: generateId(),
            createdAt: new Date().toISOString(),
        };
        return addOne(CLIENTS_KEY, client);
    },
    update: (id: string, updates: Partial<Client>) => updateOne<Client>(CLIENTS_KEY, id, updates),
    delete: (id: string) => deleteOne(CLIENTS_KEY, id),
    findByEmail: (email: string) => getAll<Client>(CLIENTS_KEY).find(c => c.email === email),
    getOrCreate: (data: Omit<Client, 'id' | 'createdAt'>): Client => {
        const existing = clientsStore.findByEmail(data.email);
        if (existing) return existing;
        return clientsStore.create(data);
    },
};

// ═══════════════════════════════════════
// CONTACT MESSAGES
// ═══════════════════════════════════════

const MESSAGES_KEY = 'ilonala-messages';

export const messagesStore = {
    getAll: () => getAll<ContactMessage>(MESSAGES_KEY),
    create: (data: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): ContactMessage => {
        const message: ContactMessage = {
            ...data,
            id: generateId(),
            status: 'unread',
            createdAt: new Date().toISOString(),
        };
        return addOne(MESSAGES_KEY, message);
    },
    markRead: (id: string) => updateOne<ContactMessage>(MESSAGES_KEY, id, { status: 'read' } as Partial<ContactMessage>),
    markReplied: (id: string) => updateOne<ContactMessage>(MESSAGES_KEY, id, { status: 'replied' } as Partial<ContactMessage>),
    delete: (id: string) => deleteOne(MESSAGES_KEY, id),
    getUnreadCount: () => getAll<ContactMessage>(MESSAGES_KEY).filter(m => m.status === 'unread').length,
};

// ═══════════════════════════════════════
// ADMIN AUTH (Simple)
// ═══════════════════════════════════════

const ADMIN_KEY = 'ilonala-admin-auth';

export const adminAuth = {
    login: (password: string): boolean => {
        // Simple admin password - in production, use proper auth
        if (password === 'ilonala2025') {
            localStorage.setItem(ADMIN_KEY, 'true');
            return true;
        }
        return false;
    },
    logout: () => localStorage.removeItem(ADMIN_KEY),
    isLoggedIn: () => localStorage.getItem(ADMIN_KEY) === 'true',
};
