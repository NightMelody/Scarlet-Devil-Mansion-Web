<script setup lang="ts">
import staffData from '@/data/staff.json'
import type { StaffMember } from '@/scripts/types';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t} = useI18n()

const staff = staffData as StaffMember[]


const groupedStaff = computed(() => {
    return staff.reduce<Record<string, StaffMember[]>>((acc, member) => {
        (acc[member.range] ??= []).push(member)
        return acc
    }, {})
})
const rangeTitles = computed(() => ({
    owner: t('owner'),
    admin: t('admin'),
    mod: t('mod'),
    helper: t('helper')
}) as any)  
    

</script>

<template>
    <div class="staff-list">
        <template v-for="(members, range) in groupedStaff" :key="range">
            <div class="divisor"></div>

            <h2>
                {{ rangeTitles[range] }}
            </h2>

            <p v-for="member in members" :key="member.name">
                <img class="profile-image" :src="member.pfp" alt="">
                <ruby>
                    {{ member.name }}
                    <rt>{{ member.ruby }}</rt>
                </ruby>
            </p>
        </template>
    </div>
</template>