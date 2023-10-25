<?php

namespace Database\Seeders;

use App\Models\Team;
use App\Models\User;
use App\Models\Company;
use App\Models\Employee;
use App\Models\LeaveType;
use App\Models\LeaveBalance;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Employee
        $user = User::create([
            'name' => 'Itwaru Samuel',
            'email' => 'itwarusamuel@gmail.com',
            'password' => bcrypt('password'),
            'avatar' => 'admin/img/default-user.png',
            'role' => 'employee',
        ]);

        $yukonCompany = Company::where('company_email', 'yukon@gmail.com')->first();
        $team = $yukonCompany->teams->first();
        $employee = Employee::create([
            'user_id' => $user->id,
            'company_id' => $yukonCompany->id,
            'team_id' => $team->id,
            'phone' => '+8801681729831',
        ]);

        $leave_types = LeaveType::where('company_id', $yukonCompany->id)->get();
        foreach ($leave_types as $leave_type) {
            LeaveBalance::create([
                'employee_id' => $employee->id,
                'leave_type_id' => $leave_type->id,
                'total_days' => $leave_type->balance,
                'used_days' => rand(0, $leave_type->balance),
            ]);
        }
    }
}
