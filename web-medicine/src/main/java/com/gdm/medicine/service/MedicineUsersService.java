/*
 * 
 *
 * 
 */
package com.gdm.medicine.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gdm.core.repository.BaseRepository;
import com.gdm.core.service.BaseService;
import com.gdm.medicine.domain.MedicineUsers;
import com.gdm.medicine.repository.MedicineUsersRepository;

/**
 * 用户表Service.
 * 
 * @author yhy
 * @version 2016-05-21
 * @----------------------------------------------------------------------------------------
 * @updated 修改描述.
 * @updated by yhy
 * @updated at 2016-05-21
 */
@Service
@Transactional
public class MedicineUsersService extends BaseService<MedicineUsers, String> {

	@SuppressWarnings("unused")
	private static Logger logger = LoggerFactory.getLogger(MedicineUsersService.class);

	@Autowired
	private MedicineUsersRepository medicineUsersRepository;

	@Override
	public BaseRepository<MedicineUsers, String> getRepository() {
		return medicineUsersRepository;
	}

}