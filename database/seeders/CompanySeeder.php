<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Company;
use App\Models\Country;
use App\Models\Holiday;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    public function createHoliday($company, $country){
        $holidays = getHolidays($country->code);

        for ($i = 0; $i < count($holidays); $i++) {
            $holiday_data[] = [
                'company_id' => $company->id,
                'title' => $holidays[$i]['title'],
                'start' => $holidays[$i]['start'],
                'end' => $holidays[$i]['end'],
                'days' => diffBetweenDays($holidays[$i]['start'], $holidays[$i]['end']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        $holiday_chunks = array_chunk($holiday_data, ceil(count($holiday_data) / 3));

        foreach ($holiday_chunks as $country) {
            Holiday::insert($country);
        }
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Owner and Company create
        $bdCountry = Country::where('code', 'bd')->first();
        $yukonOwner = User::create([
            'name' => 'Bazirakye Tonny',
            'email' => 'bazirakyetonny15@gmail.com',
            'password' => bcrypt('password'),
            'avatar' => 'admin/img/default-user.png',
            'is_opening_setup_complete' => 1,
        ]);
        $yukon = $yukonOwner->companies()->create([
            'country_id' => $bdCountry->id,
            'company_name' => 'yukon',
            'company_email' => 'yukon@gmail.com',
            'company_phone' => '123456789',
            'company_website' => 'https://yukon.software',
        ]);
        $yukonOwner->update(['current_company_id' => $yukon->id]);
        $this->createHoliday($yukon, $bdCountry);



        // // Owner and Company create
        // $inCountry = Country::where('code', 'bd')->first();
        // $smithOwner = User::create([
        //     'name' => 'John Smith',
        //     'email' => 'owner2@mail.com',
        //     'password' => bcrypt('password'),
        //     'avatar' => 'admin/img/default-user.png',
        //     'is_opening_setup_complete' => 1,
        // ]);
        // $zakirsoft = $smithOwner->companies()->create([
        //     'country_id' => $inCountry->id,
        //     'company_name' => 'Zakirsoft',
        //     'company_email' => 'zakirsoft@gmail.com',
        //     'company_phone' => '123456789',
        //     'company_website' => 'http://zakirsoft.com',
        // ]);
        // $smithOwner->update(['current_company_id' => $zakirsoft->id]);
        // $this->createHoliday($zakirsoft, $inCountry);

        // // Owner and Company create
        // $banCountry = Country::where('code', 'bd')->first();
        // $clarkOwner = User::create([
        //     'name' => 'Clark',
        //     'email' => 'owner3@mail.com',
        //     'password' => bcrypt('password'),
        //     'avatar' => 'admin/img/default-user.png',
        //     'is_opening_setup_complete' => 1,
        // ]);
        // $clarkCorporation = $clarkOwner->companies()->create([
        //     'country_id' => $banCountry->id,
        //     'company_name' => 'Clark Corporation',
        //     'company_email' => 'clarkcorporation@gmail.com',
        //     'company_phone' => '123456789',
        //     'company_website' => 'http://clarkcorporation.com',
        // ]);
        // $clarkOwner->update(['current_company_id' => $clarkCorporation->id]);
        // $this->createHoliday($clarkCorporation, $banCountry);


    }


}
