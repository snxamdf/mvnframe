/*
 * 
 *
 * 
 */
package com.gdm.medicine.mapper;

import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.gdm.core.constants.PROFILES;
import com.gdm.medicine.MedicineApplication;
import com.gdm.medicine.domain.MedicineUsers;

/**
 * 用户表Mapper测试.
 * 禁用事务回滚使用@Rollback(false).
 * 
 * @author yhy
 * @version 2016-05-21
 * @----------------------------------------------------------------------------------------
 * @updated 修改描述.
 * @updated by yhy
 * @updated at 2016-05-21
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MedicineApplication.class)
@ActiveProfiles({ PROFILES.COMM, PROFILES.JUNIT, PROFILES.DEV })
public class MedicineUsersMapperTests {

	@Autowired
	private MedicineUsersMapper medicineUsersMapper;

	@Test
	public void findById() throws Exception {
		MedicineUsers medicineUsers = medicineUsersMapper.findById("1");
		assertNull(medicineUsers);
	}

}