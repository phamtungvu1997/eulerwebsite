import { NavigateFunction } from 'react-router-dom'

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  avatar?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
}

export class AuthMiddleware {
  private static instance: AuthMiddleware
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    token: localStorage.getItem('auth_token')
  }

  static getInstance(): AuthMiddleware {
    if (!AuthMiddleware.instance) {
      AuthMiddleware.instance = new AuthMiddleware()
    }
    return AuthMiddleware.instance
  }

  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    try {
      this.authState.isLoading = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data - replace with actual API call
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Doe',
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      }
      
      const mockToken = 'mock_jwt_token_' + Date.now()
      
      this.authState.user = mockUser
      this.authState.isAuthenticated = true
      this.authState.token = mockToken
      
      localStorage.setItem('auth_token', mockToken)
      localStorage.setItem('user', JSON.stringify(mockUser))
      
      return { success: true, message: 'Login successful' }
    } catch (error) {
      return { success: false, message: 'Login failed' }
    } finally {
      this.authState.isLoading = false
    }
  }

  async logout(): Promise<void> {
    this.authState.user = null
    this.authState.isAuthenticated = false
    this.authState.token = null
    
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
  }

  async checkAuth(): Promise<boolean> {
    const token = localStorage.getItem('auth_token')
    const user = localStorage.getItem('user')
    
    if (token && user) {
      try {
        // Verify token with backend
        // For now, just restore from localStorage
        this.authState.token = token
        this.authState.user = JSON.parse(user)
        this.authState.isAuthenticated = true
        return true
      } catch (error) {
        await this.logout()
        return false
      }
    }
    
    return false
  }

  requireAuth(navigate: NavigateFunction, redirectTo: string = '/login'): boolean {
    if (!this.authState.isAuthenticated) {
      navigate(redirectTo)
      return false
    }
    return true
  }

  getAuthState(): AuthState {
    return { ...this.authState }
  }

  isAdmin(): boolean {
    return this.authState.user?.role === 'admin'
  }
}

export const authMiddleware = AuthMiddleware.getInstance()
