export interface StaffMember {
    name: string
    range: 'sm' | 'admin' | 'mod' | 'helper'
    pfp: string
    ruby?: string
}