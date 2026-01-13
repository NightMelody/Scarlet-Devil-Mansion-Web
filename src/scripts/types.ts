export interface StaffMember {
    name: string
    range: 'sm' | 'mod' | 'helper'
    pfp: string
    ruby?: string
}